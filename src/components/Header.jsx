import { useState } from "react";
import { motion } from "motion/react";

function Header() {
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

  const FakeComponent = () => {
    return <div className="bg-black h-dvh"></div>;
  };
    const FakeComponent2 = () => {
    return <div className="bg-babypowder h-dvh"></div>;
  };


  return (
    <>
      <header className="bg-babypowder font-cherry text-coffee flex justify-between align-center fixed top-0 left-0 right-0">
        <h1 className="text-4xl md:text-5xl">Coffee Haus</h1>

        {/* Monitor nav */}
        <nav className="hidden xl:flex flex-col justify-center">
          <ul className="text-2xl flex justify-between align-center gap-16">
            <li>Link 1</li>

            <li>Link 2</li>

            <li>Link 3</li>

            <li>Link 4</li>
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
            <motion.div className="bar" variants={middleVariant} />
            <motion.div
              className="bar"
              animate={clicked ? "animateBottom" : null}
              variants={topBottomVariants}
            />
          </motion.button>
        </nav>
      </header>
    </>
  );
}

export default Header;
