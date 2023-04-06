interface HotPuns {
  name: string;
  pun: string;
  reaction: number;
  comments: number;
  id: number;
}

type SuggestedArtistes = {
  id: number;
  artiste: string;
  puns_num: string;
}

type SuggestedCreators = {
  creator: string;
  content_num: string;
  id: number;
}

const hotPuns = [
  {
    name: 'Theresa webb',
    pun: "You a simp, i dont feel bad for you, i ain't sympathetic.",
    reaction: 0,
    comments: 0,
    id: 0
  },
  {
    name: 'jane cooper',
    pun: "Even if Moses gets the chance to divide the sea again, Wan-Bissaka can not cross.",
    reaction: 0,
    comments: 0,
    id: 1
  },
  {
    name: 'Esther howard',
    pun: "A diamond in the rough, that they steady being trying to undermine.",
    reaction: 0,
    comments: 0,
    id: 2
  },
  {
    name: 'Samfrexz webb',
    pun: "You a simp, i dont feel bad for you, i ain't sympathetic.",
    reaction: 0,
    comments: 0,
    id: 3
  },
]

const suggestedArtistes: SuggestedArtistes[] = [
  {
    id: 1,
    artiste: 'lil wayne',
    puns_num: '3,000'
  },
  {
    id: 2,
    artiste: 'eminem',
    puns_num: '12k'
  },
  {
    id: 3,
    artiste: 'peter drury',
    puns_num: '3,000'
  },
  {
    id: 4,
    artiste: 'vector',
    puns_num: '500'
  },
]

const suggestedCreators: SuggestedCreators[] = [
  {
    creator: 'temmy scope',
    content_num: '1,100',
    id: 0
  },
  {
    creator: 'Nehe Frexz',
    content_num: '100',
    id: 1
  },
  {
    creator: 'samfrexz',
    content_num: '12',
    id: 2
  },
  {
    creator: 'smith',
    content_num: '12k',
    id: 3
  },
]
export { 
  hotPuns, 
  suggestedArtistes,
  suggestedCreators
};