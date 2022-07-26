import { LayoutProvider } from "@/providers";
import { LayoutProps } from "@/types";
import { Component, ReactNode } from "react";
import Loading from "../Loading";
import "./styles.scss";

interface LayoutState {
  loading: boolean;
}

class Layout extends Component<LayoutProps, LayoutState> {
  constructor(props: LayoutProps) {
    super(props);
    this.state = { loading: false };
  }

  shouldComponentUpdate(_: LayoutProps, nState: LayoutState) {
    const { loading } = this.state;
    return loading !== nState.loading;
  }

  setLoading = (flag: boolean) => {
    const body = document.querySelector("body");
    if (body) {
      if (flag) {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "";
      }
    }
    this.setState({ loading: flag });
  };

  render() {
    const { children } = this.props;
    const { loading } = this.state;
    return (
      <LayoutProvider.Provider value={{ setLoading: this.setLoading }}>
        {loading ? (
          <div className="loading-layout">
            <Loading />
          </div>
        ) : null}
        <FreezeChildren>{children}</FreezeChildren>
      </LayoutProvider.Provider>
    );
  }
}

class FreezeChildren extends Component<{ children: ReactNode }> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

export default Layout;
