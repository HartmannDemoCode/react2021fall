const desc = [
    {'id':1,'title':'Book Tiles','description':'Show cases the easy way to use Bootstrap Card component to show entities as Cards rather than table rows. Using bootstrap: npm install react-bootstrap@next bootstrap@5.1.1 and import as seen in components/BookTiles.js','link':'/booktiles'},
    {'id':2,'title':'Accordion Demo','description':'Shows how to use bootstrap accordion component with image and link (For some reason the image from placeholder does not show. Instead another static image is shown.','link':'/accordion'},
    {'id':3,'title':'Pagination Demo','description':'Pagination Demo uses the local jsonserver to serve up 2000 person records (remember to start the server with npm run postbackend before using the pagination tab). Shows examples of: conditional rendering, bootstrap table with stripes, useEffect with observer','link':'/pagination'},
    {'id':4,'title':'Bootstrap Controls Demo ','description':'Show cases several different components from bootstrap','link':'/controls'},
    // {'id':4,'title':'','description':'','link':'/'},
];
export default (props) => {
    return (<>
    <ul>
        {desc.map(bullet=>{
            return (
                <>
                <h3>{bullet.title}</h3>
                <p>{bullet.description}</p>
                <b><a href={bullet.link}>Show me</a></b>
                </>
            );
        })}
    </ul>
    </>);

};