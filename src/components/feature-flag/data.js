const dummyResponse = {
  showLightAndDarkMode: true,
  showTicTacToe: true,
  showAccordian: false,
  showTabs: true,
  showStarRating: true,
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyResponse) setTimeout(resolve(dummyResponse), 500);
    else reject("some error occured! try again");
  });
}

export default featureFlagDataServiceCall;
