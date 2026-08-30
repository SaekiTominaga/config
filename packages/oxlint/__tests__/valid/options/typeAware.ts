const promiseFunc = async (): Promise<void> => {
	//
};

await promiseFunc(); // Normally `typescript(no-floating-promises)` error, but `type-aware` is disabled, no error occurs
