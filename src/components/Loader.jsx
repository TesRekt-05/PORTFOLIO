import { Html, useProgress} from "@react-three/drei"

const Loader = () => {

    const {progress}= useProgress();

  return  <Html centre>{progress}% loaded </Html>
};

export default Loader