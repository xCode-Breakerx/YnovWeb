export class MemesModel
{
  success: boolean      = false;
  data: {memes: Meme[]} = undefined!;

}

export class Meme
{
  id: string        = "";
  name: string      = "";
  url: string       = "";
  width: number     = 0;
  height: number    = 0;
  box_count: number = 0;
}
