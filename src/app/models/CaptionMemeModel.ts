export class BoxesModel
{
  text: string = null!;
  color: string | undefined;
  outline_color: string | undefined;
  x: number | undefined;
  y: number | undefined;
  width: number | undefined;
  height: number | undefined;
}

export class CaptionMemeModel
{
  template_id: string   = null!;
  username: string      = null!;
  password: string      = null!;
  text0: string         = null!;
  text1: string         = null!;
  font: string          = null!;
  max_font_size: string = null!;
  boxes: BoxesModel[]   = [];

}
