'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row gap-6'>
            {/* GitHub */}
            <motion.a
                href="https://github.com/mohsinhamza7248"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { type: 'spring', stiffness: 300 }
                }}
                className="hover:opacity-80"
            >
                <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    className="text-[#181717] "
                />
            </motion.a>

            {/* Instagram */}
            <motion.a
                href="https://www.instagram.com/mohsin_ansari_20"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { type: 'spring', stiffness: 300 }
                }}
                className="hover:opacity-80"
            >
                <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    className="text-pink-700"
                />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
                href="https://www.linkedin.com/in/mohsin-ansari-195817254"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                    scale: 1.2,
                    y: -5,
                    transition: { type: 'spring', stiffness: 300 }
                }}
                className="hover:opacity-80"
            >
                <FontAwesomeIcon
                    icon={faLinkedin}
                    size="2x"
                    className="text-[#0A66C2]"
                />
            </motion.a>
        </div>
    );
};

export default SocialMediaLinks;