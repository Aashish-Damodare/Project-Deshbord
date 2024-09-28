import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from "@mui/material"

const Reportcomp = () =>{
    const projects = [
        { name: 'Project A', progress: '70%', lastUpdated: '2024-09-15' },
        { name: 'Project B', progress: '40%', lastUpdated: '2024-09-20' },
      ];
return<>

<Paper elevation={5} sx={ { padding:' 16px',border:' 1px solid black', marginLeft:30}}>

<Typography variant="h5" sx={{ padding: '16px', textAlign: ' center'}}> Progress Reports Section</Typography>
 <TableContainer>
 
    <Table>

       
        <TableHead  >
            <TableRow sx={{
                  backgroundColor: "#3f51b5",
                  fontWeight:'bold'
                }}>
                <TableCell sx={{
                    color: "#fff",
                    border: "1px solid #ccc",
                     fontWeight:'bold'
                  }}>
                    Project Name 
                </TableCell>
                <TableCell sx={{
                    color: "#fff",
                    border: "1px solid #ccc",
                     fontWeight:'bold'
                  }}>
                   Progress
                </TableCell>
                <TableCell sx={{
                    color: "#fff",
                    border: "1px solid #ccc",
                     fontWeight:'bold'
                  }}>
                  Last Update
                </TableCell>
                <TableCell sx={{
                    color: "#fff",
                    border: "1px solid #ccc",
                     fontWeight:'bold'
                  }}>
                   Action 
                </TableCell>

                
            </TableRow>
        </TableHead>

        <TableBody>
            { projects.map((project)=>(<TableRow>
                <TableCell sx={{ border:' 1px, solid #ccc'}}>
                 {project.name}
                </TableCell>
                <TableCell sx={{ border:' 1px solid #ccc'}}>
                 {project.progress}
                </TableCell>
                <TableCell sx={{ border: ' 1px solid #ccc'}}>
                 {project.lastUpdated}
                </TableCell>
                <TableCell sx={{ border: ' 1px solid #ccc'}}>
                    <Button> Generate Report </Button>
                </TableCell>
            </TableRow>))}
            
        </TableBody>
    </Table>
 </TableContainer>
 <Button sx={{ padding:' 16px'}}> Generate Overall Report </Button>

 </Paper>

</>


}

export default Reportcomp
