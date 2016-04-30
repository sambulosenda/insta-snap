import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchMedias } from './../../actions/Media/medias';
import { setCurrentMedia } from './../../actions/Media/media';
import MediaList from './../../components/Media/MediaList';
import LoadingIndicator from './../../components/LoadingIndicator';

class Medias extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    //dispatch(fetchMedias());
  }

  loadMedia(media) {
    Actions.mediaScene({
      itemID:media.id,
      title:media.caption
    });
  }

  render() {

    const { medias,mediasReducer } = this.props;

    return (
      <ScrollView contentInset={{bottom:40}} style={{ flex:1,paddingTop:64 }}
        styles={{ flex:1 }}
      >
        { mediasReducer.isFetching && <LoadingIndicator /> }
        <MediaList medias={medias} loadMedia={this.loadMedia.bind(this)}/>
      </ScrollView>
    );

  }
}

function mapStateToProps(state) {
  const { entities,mediasReducer,userReducer } = state;
  return {
    medias:entities.medias ? entities.medias.filter((media) => media != undefined ) : [],
    mediasReducer,
    userReducer
  }
}

export default connect(mapStateToProps)(Medias)
