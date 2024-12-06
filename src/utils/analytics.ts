import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('UA-134229437-1');
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category: string, action: string) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};
