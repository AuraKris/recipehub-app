import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Button, Card, CardContent, Typography, Avatar, Container, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function UserProfile() {
    const { user, updateUser, logout } = useAuth();
    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState({
        fname: user.fname,
        phone: user.phone,
        username: user.username,
        email: user.email
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSave = () => {
        updateUser(editData);
        handleClose();
    };

    if (!user) {
        return (
            <div className="profile">
                <p className="profile-message">Please log in to see your profile.</p>
            </div>
        );
    }

    return (
        <Container maxWidth="sm" className="profile-container">
            <Card>
                <CardContent className="profile-card">
                    <Avatar className="profile-avatar">
                        {user.username.charAt(0).toUpperCase()}
                    </Avatar>
                    <Typography variant="h5" component="div">
                        {user.username}
                    </Typography>
                    <div className="profile-info">
                        <p><strong>Full Name:</strong> {user.fname}</p>
                        <p><strong>Phone:</strong> {user.phone}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                    <div className="profile-buttons">
                        <Button variant="contained" color="primary" className="profile-edit-button" onClick={handleClickOpen}>
                            Edit Profile
                        </Button>
                        <Button variant="contained" color="secondary" className="profile-logout-button" onClick={logout}>
                            Logout
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        name="fname"
                        label="Full Name"
                        type="text"
                        fullWidth
                        value={editData.fname}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Phone"
                        type="text"
                        fullWidth
                        value={editData.phone}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="username"
                        label="Username"
                        type="text"
                        fullWidth
                        value={editData.username}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={editData.email}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
