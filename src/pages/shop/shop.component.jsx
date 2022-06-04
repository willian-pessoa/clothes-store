import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

// components
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../../pages/collection/collection.container";

// redux
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

function ShopPage({ fetchCollectionsStart }) {
  useEffect(() => {
    fetchCollectionsStart();
  }, []);

  return (
    <div className="shopPage">
      <Routes>
        <Route exact path={"/"} element={<CollectionsOverviewContainer />} />
        <Route path={"/:collectionId"} element={<CollectionPageContainer />} />
      </Routes>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
