import { useState, useEffect } from 'react';

function Jobs() {
  const [rssData, setRssData] = useState([]);

  useEffect(() => {
    const fetchRssData = async () => {
      try {
        const response = await fetch('/api/jobs/rss');
        const xmlArray = await response.json();
        const jsonItems = [];

        xmlArray.map((xmlText) => {
          const parser = new DOMParser();
          const xml = parser.parseFromString(xmlText, 'application/xml');
          const items = xml.querySelectorAll('item');

          items.forEach((item) => {
            const jsonItem = {};

            item.childNodes.forEach((childNode) => {
              if (childNode.nodeType === Node.ELEMENT_NODE) {
                const name = childNode.nodeName;
                const value = childNode.textContent;

                jsonItem[name] = value;
              }
            });

            jsonItems.push(jsonItem);
          });
        });

        setRssData(jsonItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRssData();
  }, []);

  return (
    <div>
      {rssData.map((item, index) => (
        <div key={index}>
          <div className='card'>
            <div className='card-body'>
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <h5 className='card-title'>{item.title}</h5>
                  <h6 className='card-subtitle mb-2 text-body-secondary'>
                    {item.category}
                  </h6>
                  <span className='badge text-bg-dark'>{item.type}</span>
                </div>
                <div>
                  <a
                    href={item.link}
                    target='_blank'
                    className='btn btn-primary'
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h3></h3>
          <p></p>
        </div>
      ))}
    </div>
  );
}

export default Jobs;
