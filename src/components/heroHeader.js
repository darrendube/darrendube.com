import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="items-wrapper">
        <div className="headline">LEARN ECONOMICS WITH <span className="teal">EASE</span></div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />

        <form
  action="https://buttondown.email/api/emails/embed-subscribe/darrendube"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.email/darrendube', 'popupwindow')"
  class="embeddable-buttondown-form"
>
        <div className="button-wrapper">
          <input type="email" className="text-box" name="email" placeholder="Email" required></input>
          <input type="hidden" value="1" name="embed"></input>
          <input type="submit" className="hero-button -primary" value=" Subscribe &rarr;"></input>
        </div>
        </form>
      </div>
      </div>
    )}
  />
)