/**
 * The memes model for the imgflip api response
 */
export class MemesModel
{
  success: boolean      = false;
  data: {memes: Meme[]} = undefined!;

}

/**
 * Model that represents the structure of a meme in the imgflip response body
 */
export class Meme
{
  id: string        = "";
  name: string      = "";
  url: string       = "";
  width: number     = 0;
  height: number    = 0;
  box_count: number = 0;
}
