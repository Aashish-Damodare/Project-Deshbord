import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  MenuItem,
} from "@mui/material";

const TastMangment = () => {
  const [open, setOpen] = useState(false);
  const [Assinopen, setAssinopen] = useState(false);
  const tasks = [
    {
      name: "Task 1",
      assignedTo: "Digital ",
      status: "In Progress",
      dueDate: "2024-09-20",
    },
    {
      name: "Task 2",
      assignedTo: "Tech",
      status: "Not Started",
      dueDate: "2024-09-25",
    },
  ];

  const Assinhandalonclick = () => {
    setAssinopen(true);
  };

  const Assinonclosehandal = () => {
    setAssinopen(false);
  };
  const handleclick = () => {
    setOpen(true);
  };

  const handleclose = () => {
    setOpen(false);
  };
  return (
    <>
      <Paper
        elevation={5}
        sx={{
          padding: "20px",
          marginLeft: 20,
          width: "50%",
          border: "1px solid #ccc",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: "bold", padding: "5px", marginBottom: "12px" }}
        >
          Task Management Section
        </Typography>
        <Box sx={{ marginBottom: "22px" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "29px" }}
            onClick={handleclick}
          >
            Create New Task
          </Button>
          <Button variant="contained" color="secondary" onClick={Assinhandalonclick}>
            Assign Tasks
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    backgroundColor: "#3f51b5",
                    color: "#fff",
                    border: "1px solid #ccc",
                  }}
                >
                  Task Name
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#3f51b5",
                    color: "#fff",
                    border: "1px solid #ccc",
                  }}
                >
                  Assigned To
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#3f51b5",
                    color: "#fff",
                    border: "1px solid #ccc",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#3f51b5",
                    color: "#fff",
                    border: "1px solid #ccc",
                  }}
                >
                  Due Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {task.name}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {task.assignedTo}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {task.status}
                  </TableCell>
                  <TableCell sx={{ border: "1px solid #ccc" }}>
                    {task.dueDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={open} onClose={handleclose}>
          <DialogTitle>Create New Task</DialogTitle>
          <DialogContent>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Task Name"
                    // value={taskName}
                    // onChange={(e) => setTaskName(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Assigned To"
                    // value={assignedTo}
                    // onChange={(e) => setAssignedTo(e.target.value)}
                    required
                  >
                    <MenuItem value="Digital">Digital</MenuItem>
                    <MenuItem value="Design">Design</MenuItem>
                    <MenuItem value="Tech">Tech</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="date"
                    fullWidth
                    label="Due Date"
                    // value={dueDate}
                    // onChange={(e) => setDueDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    rows={4}
                    fullWidth
                    label="Description"
                    // value={description}
                    // onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Priority Level"
                    // value={priority}
                    // onChange={(e) => setPriority(e.target.value)}
                    required
                  >
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Status"
                    // value={status}
                    // onChange={(e) => setStatus(e.target.value)}
                    required
                  >
                    <MenuItem value="Not Started">Not Started</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                    <MenuItem value="On Hold">On Hold</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Create Task
                  </Button>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleclose} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={Assinopen} onClose={Assinonclosehandal}>
          <DialogTitle>
            <Typography variant="h5">Assign task</Typography>
          </DialogTitle>
          <DialogContent>
            <form >
              <Typography variant="h6">Assign Tasks</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Select Task"
                    // value={selectedTask}
                    // onChange={(e) => setSelectedTask(e.target.value)}
                    required
                  >
                    <MenuItem value="">
                      <em>Select Task</em>
                    </MenuItem>
                    <MenuItem value="task1">Task 1</MenuItem>
                    <MenuItem value="task2">Task 2</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Assign To"
                    // value={assignTo}
                    // onChange={(e) => setAssignTo(e.target.value)}
                    required
                  >
                    <MenuItem value="">
                      <em>Select Team</em>
                    </MenuItem>
                    <MenuItem value="teamA">Team A</MenuItem>
                    <MenuItem value="teamB">Team B</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="date"
                    fullWidth
                    label="Due Date"
                    // value={newDueDate}
                    // onChange={(e) => setNewDueDate(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Assign Task
                  </Button>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={Assinonclosehandal} color="secondary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </>
  );
};
export default TastMangment;
