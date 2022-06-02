import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

// components
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../../pages/collection/collection.container";

// redux
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

function ShopPage({ fetchCollectionsStartAsync }) {
  useEffect(() => {
    fetchCollectionsStartAsync();
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
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
