import * as apiDocs from './api';


// the main task of the API documentation generation process
async function run() {
  await apiDocs.generate();
}

// Invoke run() only if executed directly i.e. `node ./scripts/e2e`
if (require.main === module) {
  run().then(() => {
    // do nothing
  })
  .catch(err => {
    console.log(err);
    // fail with non-zero status code
    process.exit(1);
  });
}
