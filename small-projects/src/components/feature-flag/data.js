const dummyResponse = {
  showLightAndDarkMode: true,
  showTicTacToe: true,
  showAccordian: true,
  showTabs: false,
  showStarRating: true,
};

function featureFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyResponse) setTimeout(resolve(dummyResponse), 500);
    else reject("some error occured! try again");
  });
}

export default featureFlagDataServiceCall;
