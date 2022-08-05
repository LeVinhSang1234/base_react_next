import { withRouter } from "@/utils/withRouter";
import { WithRouterProps } from "@/types";
import { Component } from "react";

interface TestProps {
  howdy: boolean;
  partner: boolean;
}

class Home extends Component<WithRouterProps<TestProps>> {
  render() {
    const { navigate } = this.props;
    return <div onClick={() => navigate("/home/23122")}>Home</div>;
  }
}

export default withRouter(Home);
