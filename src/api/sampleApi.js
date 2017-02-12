export const sampleApi = () =>
	new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("resolving async api");
      resolve({ id: 1 });
    }, 5000)
  );
