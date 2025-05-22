import { Html, useProgress} from "@react-three/drei"

const Loader = () => {

    const {progress}= useProgress();

  return  <Html centre classname="text-xl font-normal text-centre">{progress}% loaded </Html>
};

export default Loader