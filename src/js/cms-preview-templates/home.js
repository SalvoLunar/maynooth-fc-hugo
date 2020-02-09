import React from "react";
//import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    const entryValues = entry.getIn(["data", "images"]);
    const images = entryValues ? entryValues.toJS() : [];

    return <div>
      <Jumbotron image={images[0].imageUrl} title={entry.getIn(["data", "title"])} subtitle={entry.getIn(["data", "subtitle"])}/>
        <div className="bg-grey-1 pv4">
          <div className="mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 text-center center">{entry.getIn(["data", "welcome"])}</h2>
            <div className="text-center center">{ widgetFor("blurb") }</div>
          </div>
        </div>
        <div className="bg-white-1 pv4">
          <div className="mhn1-l ph3 center mw7">
            <h2 className="f2 b lh-title mb2 text-center center">{entry.getIn(["data", "about"])}</h2>
            <div className="text-center center">{ widgetFor("about_content") }</div>
          </div>
        </div>
    </div>
  }
}
