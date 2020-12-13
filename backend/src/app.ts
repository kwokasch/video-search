import express, { Request, Response } from 'express';

import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('dev'));

const videos = [{
  id: 1,
  linkUrl: '#',
  imageUrl: 'images/letterkenny.png',
  title: 'Letterkenny Season 9 Trailer',
  description: 'You can watch the new season of Letterkenny December 25th on Crave and December 26th on Hulu if you want to.',
}, {
  id: 2,
  linkUrl: '#',
  imageUrl: 'images/math-rock.png',
  title: '5 Awesome FACGCE Riffs - Covet, TTNG, American Football, Colossal',
  description: 'Hello, Steve here, hope you\'re doing well. In this video, I show you 5 riffs in FACGCE tuning. A question I get asked quite often is what is the best way to learn how to play in other tunings. I think a great way to start is to learn other songs or parts of songs in different tunings, this way you will get some insight into how to possibly play, techniques you can use, where chords are, nice sounding notes and so on.',
}, {
  id: 3,
  linkUrl: '#',
  imageUrl: 'images/seinfeld.png',
  title: 'Worst bomb: Eddie Murphy, Norm Macdonald, John Oliver, and Jerry Seinfeld',
  description: 'John Oliver, Eddie Murphy, Norm Macdonald and Jerry Seinfeld talk about their worst bombs on stage. Cedric The Entertainer talks with Jerry about the joy of talking about other comedians bombing.',
}, {
  id: 4,
  linkUrl: '#',
  imageUrl: 'images/citra.png',
  title: 'CITRA - Air (Official Music Video)',
  description: 'High-energy, guitar driven rock weaving its way through soulful, heartfelt melodies. Bright. Fast. Fun. Loud. CITRA.',
}, {
  id: 5,
  linkUrl: '#',
  imageUrl: 'images/nathan-fielder.png',
  title: 'Can the Emmys be Hacked?',
  description: 'Nathan Fielder reveals potential vulnerabilities in the Emmy online voting system with election security expert Carsten Schürmann.',
}, {
  id: 6,
  linkUrl: '#',
  imageUrl: 'images/pwas.png',
  title: 'Progressive Web Apps Are The Future',
  description: 'Get the lowdown on Progressive Web Apps – why PWAs are the freshest way to reach more users and create richer user experiences and engagement.',
}];

app.get('/videos', (request: Request, response: Response) => {
  response.json({ videos });
});

export default app;
