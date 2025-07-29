import React from 'react';

// Define interfaces for your data structures
export interface IHeadData {
  title: string;
  lang: string;
  description: string;
}

export interface IHeroData {
  title: string;
  name: string;
  subtitle: string;
  cta: string;
}

export interface IAboutData {
  img: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  resume: string;
}

export interface IProject {
  id: string;
  img: string;
  title: string;
  info: string;
  info2: string;
  url: string;
  repo: string;
}

export interface IContactData {
  cta: string;
  btn: string;
  email: string;
}

export interface INetwork {
  id: string;
  name: string;
  url: string;
}

export interface IFooterData {
  networks: INetwork[];
}

// Define the shape of your context value
export interface IPortfolioContext {
  hero: IHeroData;
  about: IAboutData;
  projects: IProject[];
  contact: IContactData;
  footer: IFooterData;
}

const PortfolioContext = React.createContext<IPortfolioContext | undefined>(undefined);

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;