import React from "react";
import Loadable from "react-loadable";
import LoadableVisibility from "react-loadable-visibility/react-loadable";

const LoadComponent = (
  loadFunction,
  { loader, Loading, Error, Timeout, delay = 200, timeout }
) => {
  return loadFunction({
    loader,
    loading: props => {
      if (props.error && Error) {
        return <Error retry={props.retry} />;
      } else if (props.timedOut && Timeout) {
        return <Timeout retry={props.retry} />;
      } else if (props.pastDelay && props.isLoading && Loading) {
        return <Loading />;
      } else {
        return null;
      }
    },
    delay,
    timeout
  });
};

export const Load = options => LoadComponent(Loadable, options);

export const LoadWhenVisible = options =>
  LoadComponent(LoadableVisibility, options);
