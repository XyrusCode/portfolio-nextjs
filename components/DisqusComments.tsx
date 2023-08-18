import React, { useEffect } from 'react';

type  DisqusCommentsProps = {
    pageUrl: string;
    pageIdentifier: string;
};

const DisqusComments = ({ pageUrl, pageIdentifier }: DisqusCommentsProps) => {
    useEffect(() => {
        // Load Disqus script
        const d = document;
        const s = d.createElement('script');
        s.src = 'https://xyrus-code.disqus.com/embed.js';
        s.setAttribute('data-timestamp', String(+new Date()));
        (d.head || d.body).appendChild(s);
      }, []);
    
      // Configure Disqus
      useEffect(() => {
        // @ts-ignore 
        window.disqus_config = function () {
            // @ts-ignore 
          this.page.url = pageUrl;
          // @ts-ignore 
          this.page.identifier = pageIdentifier;
        };
      }, [pageUrl, pageIdentifier]);
    
      return (
        <div>
          <div id="disqus_thread"></div>
          <noscript>
            Please enable JavaScript to view the{' '}
            <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
          </noscript>
        </div>
      );
    };
    
    export default DisqusComments;