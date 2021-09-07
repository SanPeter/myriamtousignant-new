import EmblaCarousel from 'embla-carousel';
import { setupPrevNextBtns, disablePrevNextBtns } from './carousel';

const wrap = document.querySelector('.embla');
const viewPort = wrap.querySelector('.embla__viewport');
const prevBtn = wrap.querySelector('.embla__button--prev');
const nextBtn = wrap.querySelector('.embla__button--next');
const options = { loop: false };

const embla = EmblaCarousel(viewPort, options);

const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

setupPrevNextBtns(prevBtn, nextBtn, embla);

embla.on('select', disablePrevAndNextBtns);
embla.on('init', disablePrevAndNextBtns);
