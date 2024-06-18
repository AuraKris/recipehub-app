import React from 'react';
import { Typography, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className="footer container">
            <div className="footer-sec">
                <Typography variant="h6" className="ftr-title">RecipeHub.com</Typography>
                <Typography variant="body2" className="ftr-desc">
                    Welcome to RecipeHub, your ultimate culinary companion! Explore a world of delicious recipes, from quick weekday meals to gourmet treats. Whether you're a seasoned chef or a kitchen novice, find inspiration, tips, and step-by-step guides to elevate your cooking skills. Join our community and discover how simple ingredients can create extraordinary dishes. Happy cooking!
                </Typography>
            </div>
            <div className="footer-sec">
                <Typography variant="h6" className="ftr-title">Contact Us</Typography>
                <Typography>Email: admin@recipehub.com</Typography>
                <div className="icon-footer">
                    <Typography>
                        <Link href="https://www.instagram.com/recipehub" target="_blank" rel="noopener" color="inherit">
                            <InstagramIcon />
                        </Link>
                    </Typography>
                    <Typography>
                        <Link href="https://www.facebook.com/recipehub" target="_blank" rel="noopener" color="inherit">
                            <FacebookIcon />
                        </Link>
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default Footer;
