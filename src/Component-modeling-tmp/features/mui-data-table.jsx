import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function SomeTable({data-fetched-from-api-passed-as-props}) {
    console.log(data-fetched-from-api-passed-as-props)//check data != undefine/null/[]
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
            <TableRow>
            {data-fetched-from-api-passed-as-props?
                (Object.keys(data-fetched-from-api-passed-as-props[0]).map((item,index)=><TableCell key={index}  align="right">{item}</TableCell>))
                :
                (<TableCell> </TableCell>)
            }
            </TableRow>
        </TableHead>
        <TableBody>
            {data-fetched-from-api-passed-as-props?
                (data-fetched-from-api-passed-as-props.map((obj,index) =>
                    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    {Object.values(obj).map(item =><TableCell  align="right">{item}</TableCell>)}
                    </TableRow>))
                :
                (<TableCell></TableCell>)
            }
        </TableBody>
    </Table>
    </TableContainer>
    );
}