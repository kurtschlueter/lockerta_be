   // NetworkClient.js
   import request from 'superagent';
   import Rx from 'rx';
   import { httpMethods } from './httpMethods';

   function NetworkClient() {
   }

   function generateRequest(apiDefinition, finalUrl, requestHandler) {
    // console.log('api apiDefinition in generate request', apiDefinition, finalUrl)
     let requestBuilder = request;
     if (apiDefinition.method === httpMethods.POST) {
       requestBuilder = request.post(finalUrl);
       requestBuilder.send(apiDefinition.body);
     } else if (apiDefinition.method === httpMethods.GET) {
       requestBuilder = request.get(finalUrl);
     } else if (apiDefinition.method === httpMethods.PUT) {
       requestBuilder = request.put(finalUrl);
       requestBuilder.send(apiDefinition.body);
     } else if (apiDefinition.method === httpMethods.DELETE) {
       requestBuilder = request.delete(finalUrl);
       requestBuilder.send(apiDefinition.body);
     }
     requestBuilder.set(apiDefinition.headers);
     requestBuilder.end((err, res) => {
       requestHandler(err, res);
     });
   }

   NetworkClient.prototype.observableClient = function createObservableClient(apiDefinition) {
     const finalUrl = `${apiDefinition.basePath}${apiDefinition.path}`;
     // debugger
     return Rx.Observable.create((observer) => {
       generateRequest(apiDefinition, finalUrl, (err, res) => {
        console.log('observableClient', res)
         if (err) {
           observer.onError(err);
         } else {
           observer.onNext(JSON.parse(res.text));
           observer.onCompleted();
         }
       });
     });
   };

   module.exports = new NetworkClient();
