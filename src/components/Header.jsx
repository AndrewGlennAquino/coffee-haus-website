import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [clicked, setClicked] = useState(false); // Keep clicked in state to open and close hamburger menu

  /**
   * Function that handles user click on hamburger menu
   *
   * @param {*} e event
   */
  const handleClick = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };

  // Animation variants for hamburger menu
  const topBottomVariants = {
    animateTop: { y: "0.6875rem", rotate: "45deg" },
    animateBottom: { y: "-0.6875rem", rotate: "-45deg" },
  };

  const middleVariant = {
    animate: { opacity: 0 },
  };

  // Animation variants for monitor links
  const linkVariants = {
    animate: { scale: 1.25 },
  };

  return (
    <>
      <header className="bg-babypowder shadow-lg sticky top-0 left-0 right-0">
        <div className="font-cherry text-coffee mp-default flex justify-between items-center">
          <h1 className="text-3xl lg:text-4xl flex items-center">
            Coffee Haus
          </h1>

          {/* Monitor nav */}
          <nav className="hidden xl:flex flex-col justify-center">
            <ul className="text-2xl flex justify-between align-center gap-16">
              <motion.li whileHover="animate" variants={linkVariants}>
                <Link to="/">Home</Link>
              </motion.li>

              <motion.li whileHover="animate" variants={linkVariants}>
                <Link>Link 2</Link>
              </motion.li>

              <motion.li whileHover="animate" variants={linkVariants}>
                <Link>Link 3</Link>
              </motion.li>

              <motion.li whileHover="animate" variants={linkVariants}>
                <Link>Link 4</Link>
              </motion.li>
            </ul>
          </nav>

          {/* Hamburger nav */}
          <nav className="xl:hidden">
            <motion.button
              className="w-12 h-12 flex flex-col justify-center gap-1.5"
              animate={clicked ? "animate" : null}
              onClick={handleClick}
            >
              <motion.div
                className="bar"
                animate={clicked ? "animateTop" : null}
                variants={topBottomVariants}
              />
              <motion.div
                className="bar"
                animate={clicked ? "animate" : null}
                variants={middleVariant}
              />
              <motion.div
                className="bar"
                animate={clicked ? "animateBottom" : null}
                variants={topBottomVariants}
              />
            </motion.button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
