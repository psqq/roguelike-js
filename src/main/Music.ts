import { randChoice } from './utils/RandomUtils';
import { playMusic } from './audio';
import { Sample } from './types';

function transpose_8va([freq, ms]: Sample): Sample {
  return [freq * 2, ms];
}

function transpose_8vb([freq, ms]: Sample): Sample {
  return [freq / 2, ms];
}

type Figure = Sample[];

type Suite = {
  length: number;
  sections: {
    [sectionName: string]: {
      bass?: Figure[],
      lead?: Figure[],
    }
  }
}

const SUITE_1: Suite = (() => {
  const FIGURE_1: Figure = [[300,2000],[200,1000],[225,1000]];
  const FIGURE_2: Figure = [[300,1000],[225,1000],[200,2000]];
  const FIGURE_3: Figure = [[200,1000],[225,1000],[250,2000]];
  const FIGURE_4: Figure = [[300,200],[250,100],[225,200],[600,500],[300,200],[200,200],[225,100],[200,200],[225,200],[300,100],[600,500],[300,500],[600,500],[250,500],[300,200],[200,200],[250,100],[300,200],[225,200],[250,100]];
  const FIGURE_5: Figure = [[600,500],[225,250],[250,250],[500,500],[600,500],[400,500],[250,500],[200,250],[225,250],[300,250],[400,250]];
  const FIGURE_6: Figure = [[600,200],[0,100],[600,200],[0,500],[600,500],[0,500]];

  return {
    length: 4000,
    sections: {
      SECTION_A: {
        bass: [FIGURE_1, FIGURE_6]
      },
      SECTION_B: {
        bass: [FIGURE_1, FIGURE_2, FIGURE_4],
        lead: [FIGURE_4, FIGURE_5]
      },
      SECTION_C: {
        bass: [FIGURE_2, FIGURE_3/*, FIGURE_4*/],
        lead: [FIGURE_4]
      },
      SECTION_D: {
        bass: [FIGURE_3, FIGURE_4, FIGURE_6],
        lead: [FIGURE_4, FIGURE_5, FIGURE_6],
      }
    }
  };
})();

const SUITE_2: Suite = (() => {
  const FIGURE_1: Figure = [[100,1000],[80,1000],[120,1000],[80,1000]]
    .map(transpose_8va);
  const FIGURE_2: Figure = [[50,1000],[80,1000],[200,1000],[240,750],[230,250]]
  //const FIGURE_2 = [[50,1000],[80,1000],[200,1000],[240,750],[/*230*/225,250]]
    .map(transpose_8va).map(transpose_8va);
  const FIGURE_3: Figure = [[300,500],[240,500],[225,1000],[200,750],[150,250],[180,1000]];
  // const FIGURE_3 = [[300,500],[/*235*/240,500],[225,1000],[200,750],[150,250],[180,1000]];
  const FIGURE_4: Figure = [[50,250],[80,250],[100,500],[80,250],[100,250],[225,125],[200,125],[180,125],[150,125],[50,250],[80,250],[100,500],[80,250],[100,250],[225,125],[200,125],[180,125],[150,125]]
    .map(transpose_8va).map(transpose_8va);
  const FIGURE_5: Figure = [[300,500],[200,1000],[225,500],[240,500],[150,1000],[100,250],[180,250]];
  //const FIGURE_5 = [[300,500],[200,1000],[225,500],[/*235*/240,500],[150,1000],[100,250],[180,250]];
  const FIGURE_6: Figure = [[100,250],[0,250],[100,250],[0,250],[100,250],[0,250],[100,250],[120,250],[100,250],[0,250],[100,250],[0,250],[80,250],[100,250],[80,250],[90,250]]
    .map(transpose_8va);

  return {
    length: 4000,
    sections: {
      SECTION_A: {
        bass: [FIGURE_1, FIGURE_6]
      },
      SECTION_B: {
        bass: [FIGURE_1, FIGURE_2, FIGURE_4],
        lead: [FIGURE_4, FIGURE_5]
      },
      SECTION_C: {
        bass: [FIGURE_2, FIGURE_3/*, FIGURE_4*/],
        lead: [FIGURE_4]
      },
      SECTION_D: {
        bass: [FIGURE_3, FIGURE_4, FIGURE_6],
        lead: [FIGURE_4, FIGURE_5, FIGURE_6],
      }
    }
  };
})();

const suites = { SUITE_1, SUITE_2 };

const currentSuite = null;

function playSuite(suite: Suite) {
  const sections = Object.values(suite.sections);
  const numRepeats = 4;
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    const bass = randChoice(section.bass);
    let lead;
    if (!!section.lead) {
      do {
        lead = randChoice(section.lead);
      } while (lead === bass);
    }

    for (let j = 0; j < numRepeats; j++) {
      setTimeout(() => {
        const figures = [
          bass.map(transpose_8vb),
          ...(!!lead ? [lead] : [])
        ];
        figures.forEach(figure => playMusic(figure));
      }, ((numRepeats * i) + j) * suite.length);
    }
  }
  setTimeout(() => playSuite(suite), sections.length * suite.length * numRepeats);
}

export default {
  SUITE_1,
  SUITE_2,
  currentSuite,
  playSuite
};