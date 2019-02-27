import * as React from 'react'

export default class Music extends React.Component {
  render() {
    return (
      <div className="content-container">
        <iframe
          title="soundcloud-widget"
          min-width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/307362001&color=%23626977&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        />
        <a href="https://soundcloud.com/vimptools">
          There is more where this comes from!
        </a>
      </div>
    )
  }
}
