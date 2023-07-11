const METAMASK_LOGO_URL =
  "https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg";

const WALLETCONNECT_LOGO_URL =
  "https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg";

const COINBASEWALLET_LOGO_URL =
  "https://avatars.githubusercontent.com/u/18060234?s=200&v=4";

/**
 * @author Ventura Rodríguez <ventu@kudu.design> `2023/06/11`
 *
 * @description
 * Returns the url of the image of the connector passed by parameter.
 */
export const imageWalletSelector: (
  name: "metaMask" | "walletConnect" | "coinbaseWallet"
) => string = (name) => {
  switch (name) {
    case "metaMask":
      return METAMASK_LOGO_URL;
    case "walletConnect":
      return WALLETCONNECT_LOGO_URL;
    case "coinbaseWallet":
      return COINBASEWALLET_LOGO_URL;
  }
};
