import React, { PropTypes } from 'react';
import TextInput from './../../tcReactUI/TextInput.jsx';

const IntegrationsTabPresenter = ({
  changeHandler,
  openHandler,
  saveHandler,
  cancelHandler,
  integrations,
  clientIntegrations,
  clientIntegrationValues,
  display,
  emptyErrors,
  warnings
}) => {
    const content = (
      <div className="tab-content">
        <div className="col-lg-12-integrations">
          <div id="accordion">
          { integrations.map((integration, index) => {
            return (
              <div key={index} className="integrationTab">
                <input type="checkbox" />
                   <label style={{ userSelect: 'none' }} id="integration.id" onClick={() => (openHandler(integration.id))} >
                       <p id="integrationName">
                           <i id="arrowId" className={display[integration.id] ? "fa fa-caret-down fa-2x" : "fa fa-caret-right fa-2x"} style={{ padding: '0px 20px 0px 0px' }} />
                           <a>{integration.name}&nbsp;</a>
                       </p>
                       {(warnings.find(warning => warning === integration.id)) &&
                           <i className="fa fa-exclamation-triangle alert" aria-hidden="true" />
                       }
                   </label>
                {
                  (display[integration.id] === true)
                  ?
                    <article>
                    { integration.keys.map((key, indexB) => {
                      return (
                        <div key={indexB + key.name}>
                        { clientIntegrations.map((clientIntegration, indexC) => {
                          if (key.id === clientIntegration.sourceFieldId) {
                            return (
                              <div key={indexC + key.name} style={{ width: '92%' }}>
                                <TextInput
                                  id={key.name}
                                  titleClassName={'integration-label'}
                                  name={key.name}
                                  title={key.name}
                                  value={clientIntegrationValues[clientIntegration.sourceFieldId]}
                                  onChange={value => changeHandler(value, clientIntegration.sourceFieldId)}
                                />
                              </div>
                            );
                          }
                        })}
                        <div id="actions" style={{ paddingTop: '5px' }}>
                          {(emptyErrors.find(err => err === integration.id)) &&
                            <aside>One or more fields are empty, please fill in and save again</aside>
                          }
                          <div className="btn-container">
                            <button type="saveIntegration" value="Save" onClick={() => (saveHandler(integration.id))}>SAVE</button>
                            <span id="cancel" onClick={() => (cancelHandler(integration.id))}>Cancel</span>
                          </div>
                        </div>
                        </div>
                      );
                    })}
                    </article>
                  : null
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
    );
  return (
    <div>{content}</div>
  );
};

IntegrationsTabPresenter.displayName = 'IntegrationsTabPresenter';

IntegrationsTabPresenter.propTypes = {
  changeHandler: PropTypes.func,
  openHandler: PropTypes.func,
  saveHandler: PropTypes.func,
  cancelHandler: PropTypes.func,
  integrations: PropTypes.array,
  clientIntegrations: PropTypes.array,
  display: PropTypes.String
};

export default IntegrationsTabPresenter;
