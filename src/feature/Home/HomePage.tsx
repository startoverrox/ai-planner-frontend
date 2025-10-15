import { motion as Motion } from "motion/react";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <div className="flex items-center justify-center">
        <Motion.button className="bg-sky-500" whileHover={{ scale: 1.5 }}>
          test motion
        </Motion.button>
      </div>
    </div>
  );
};

export default HomePage;
