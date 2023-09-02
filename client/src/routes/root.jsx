export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Peter Yelton</h1>
        
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Projects</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Your Friend</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }