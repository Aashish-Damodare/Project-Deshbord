import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button
} from "@mui/material";

const StatusDadline = () => {
    const projects = [
        { name: 'Project A', status: 'Active', dueDate: '2024-10-01' },
        { name: 'Project B', status: 'On Hold', dueDate: '2024-09-30' },
        { name: 'Project C', status: 'Completed', dueDate: '2024-11-01' },
      ];
  return (
    <>
      <Paper elevation={5} sx={{ padding: "16px", marginLeft:20 }}>
        <Typography variant="h5" sx={{ textAlign:' center', padding:'5px', marginBottom:' 12px', fontWeight:'bold'}}>Deadline Management</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: "#3f51b5",
                  color: "#fff",
                  border: "1px solid #ccc",
                   fontWeight:'bold'
                }}
              >
                <TableCell
                  sx={{
                    color: "#fff",
                    border: "1px solid #ccc",
                     fontWeight:'bold'
                  }}
                >
                  Project Name
                </TableCell>
                <TableCell
                  sx={{
                    color: "#fff",
                    border: "1px solid #ccc",
                    fontWeight:'bold'
                  }}
                >
                  Current Status
                </TableCell>
                <TableCell
                  sx={{
                    color: "#fff",
                    border: "1px solid #ccc",
                     fontWeight:'bold'
                  }}
                >
                  Current Due Date
                </TableCell>
                <TableCell
                  sx={{
                    color: "#fff",
                    border: "1px solid #ccc",
                     fontWeight:'bold'
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>



                {projects.map((project)=>(   <TableRow >
                    <TableCell sx={{ border: "1px solid #ccc" }}>
                        {project.name}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ccc" }}>
                        {project.status}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ccc" }}>
                        {project.dueDate}
                    </TableCell>
                    <TableCell sx={{ border: "1px solid #ccc" }}>
                    <Button variant="outlined" sx={{borderRadius:'90%', marginRight:'10px'}}>view</Button>
                    <Button variant="outlined"sx={{ borderRadius:'20px'}} >Update Deadline</Button>
                    </TableCell>
                    
                </TableRow>))}
             
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
export default StatusDadline;
