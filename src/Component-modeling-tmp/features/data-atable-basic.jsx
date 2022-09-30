import "./table.css";

export default function someTable({data-fetched-from-api-passed-as-props}) {
    console.log(data-fetched-from-api-passed-as-props)//check data != undefine/null/[]
    return ( 
        <table>
            <thead>
                <tr>
                {data-fetched-from-api-passed-as-props?//in case data workes well
                (Object.keys(data-fetched-from-api-passed-as-props[0]).map((item,index)=><th key={index}>{item}</th>))
                :
                (<th> </th>)//in case data dont workes well
                }</tr>
            </thead>
            <tbody>
                <tr>
                {data-fetched-from-api-passed-as-props?//in case data workes well
                (data-fetched-from-api-passed-as-props.map(obj =>
                 <tr>
                    {Object.values(obj).map(item =><td>{item}</td>)}
                 </tr>))
                 :
                 (<td></td>)//in case data dont workes well
                }</tr>
            </tbody>
        </table>
    );
}