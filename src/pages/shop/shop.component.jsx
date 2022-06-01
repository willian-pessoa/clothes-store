import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

// components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

// redux
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

function ShopPage(props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let unsubscribeFromSnapshot = null;
    const { updateCollections } = props;

    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setIsLoading(false);
    });

    return () => unsubscribeFromSnapshot;
  }, []);

  return (
    <div className="shopPage">
      <Routes>
        <Route exact path={"/"} element={<CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>} />
        <Route
          path={"/:collectionId"}
          element={<CollectionPageWithSpinner isLoading={isLoading} {...props} />}
        />
      </Routes>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
