import { motion } from "motion/react";
import React from "react";

const ProfileCard: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <h1>Profile Card</h1>
        </motion.div>
    );
};

export default ProfileCard;