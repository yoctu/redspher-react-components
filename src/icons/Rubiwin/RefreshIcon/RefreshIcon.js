import React from 'react'
import { SvgIcon } from '@mui/material'
import themeConstants from '../../../rubiwin/theme/themeConstants'

function RefreshIcon(props) {
  return (
    <SvgIcon htmlColor='transparent' viewBox='0 0 20 20'>
      <path
        d='M9.85955 3.15C8.62739 3.15 7.42945 3.44577 6.36843 4.00446C6.23152 4.07019 6.1973 4.23451 6.26575 4.3331C6.3342 4.46455 6.50533 4.49742 6.60802 4.43169C7.60059 3.90587 8.69584 3.64296 9.85955 3.64296C13.5903 3.64296 16.6364 6.56784 16.6364 10.15C16.6364 13.7322 13.5903 16.657 9.85955 16.657C6.12884 16.657 3.08267 13.7322 3.08267 10.15C3.08267 9.09836 3.35648 8.07958 3.83566 7.15939L4.04102 8.07958C4.07524 8.21103 4.17792 8.27676 4.2806 8.27676C4.31483 8.27676 4.31483 8.27676 4.34906 8.27676C4.48596 8.2439 4.58864 8.11244 4.55442 7.98099L4.21215 6.43639C4.21215 6.37066 4.1437 6.30493 4.10947 6.27207C4.04102 6.2392 3.97256 6.2392 3.90411 6.2392L2.32968 6.66643C2.19278 6.6993 2.12432 6.83075 2.15855 6.96221C2.19278 7.09366 2.32968 7.15939 2.46659 7.12653L3.45916 6.86361C2.91154 7.84953 2.6035 8.99976 2.6035 10.15C2.6035 13.9951 5.85503 17.15 9.89377 17.15C13.9325 17.15 17.1498 13.9622 17.1498 10.1171C17.1498 6.27207 13.8983 3.15 9.85955 3.15Z'
        fill={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
      <path
        d='M6.30073 3.87058C7.38309 3.30113 8.60425 3 9.85955 3C13.9749 3 17.2998 6.18309 17.2998 10.1171C17.2998 14.0485 14.0119 17.3 9.89377 17.3C5.77752 17.3 2.4535 14.0831 2.4535 10.15C2.4535 9.09047 2.70891 8.03184 3.16861 7.09575L2.50161 7.27242C2.30296 7.32011 2.07251 7.22709 2.01339 7C1.96032 6.79618 2.06738 6.5765 2.2923 6.52115L3.88412 6.0892H3.90411C3.90655 6.0892 3.90904 6.0892 3.91159 6.0892C3.97648 6.08912 4.07474 6.089 4.17439 6.13684L4.19604 6.14724L4.2149 6.16535C4.23187 6.18163 4.26506 6.21348 4.294 6.25237C4.31919 6.28624 4.35546 6.34391 4.36133 6.41628L4.70034 7.94617C4.75923 8.17992 4.57741 8.37621 4.38407 8.42262L4.36681 8.42676H4.2808C4.1106 8.42676 3.94748 8.31565 3.89586 8.11737L3.89453 8.11227L3.78329 7.61341C3.42994 8.40944 3.23267 9.26856 3.23267 10.15C3.23267 13.6436 6.20588 16.507 9.85955 16.507C13.5132 16.507 16.4864 13.6436 16.4864 10.15C16.4864 6.65637 13.5132 3.79296 9.85955 3.79296C8.72084 3.79296 7.65146 4.04965 6.68285 4.5618C6.51057 4.66698 6.2489 4.61362 6.13707 4.41052C6.02178 4.2337 6.08961 3.97391 6.30073 3.87058ZM9.85955 3.3C8.65137 3.3 7.47747 3.59002 6.43832 4.13719L6.43339 4.13978C6.40632 4.15278 6.39086 4.17407 6.38461 4.19659C6.37775 4.22131 6.38356 4.23978 6.38896 4.24755L6.39439 4.25537L6.39879 4.26382C6.41085 4.28698 6.43288 4.30376 6.46125 4.31103C6.49168 4.31882 6.51614 4.31241 6.52715 4.30536L6.53756 4.29869C7.55288 3.76082 8.67266 3.49296 9.85955 3.49296C13.6673 3.49296 16.7864 6.47931 16.7864 10.15C16.7864 13.8207 13.6673 16.807 9.85955 16.807C6.0518 16.807 2.93267 13.8207 2.93267 10.15C2.93267 9.07209 3.21334 8.0297 3.70261 7.09011L3.8925 6.72545L4.18676 8.04395C4.196 8.07776 4.21186 8.09725 4.22652 8.10851C4.24223 8.12058 4.26121 8.12676 4.2806 8.12676H4.32726C4.3549 8.11697 4.37924 8.09892 4.39424 8.07812C4.41108 8.05476 4.41331 8.03436 4.40926 8.01878L4.40787 8.01346L4.06215 6.45281V6.44498C4.06056 6.44201 4.05779 6.43748 4.05329 6.43143C4.04528 6.42066 4.03572 6.41016 4.02537 6.39967C4.00016 6.39164 3.97073 6.38963 3.92385 6.38927L2.36471 6.81235C2.31743 6.8237 2.28851 6.86604 2.30371 6.92441C2.30941 6.94631 2.32267 6.96226 2.34296 6.97274C2.36423 6.98374 2.39499 6.98911 2.43015 6.981L3.76141 6.62838L3.59029 6.93645C3.05474 7.90063 2.7535 9.02587 2.7535 10.15C2.7535 13.907 5.93254 17 9.89377 17C13.8532 17 16.9998 13.8759 16.9998 10.1171C16.9998 6.36104 13.8217 3.3 9.85955 3.3Z'
        fill={
          props.primarycolor ? props.primarycolor : themeConstants.grey.main
        }
      />
    </SvgIcon>
  )
}

export default RefreshIcon