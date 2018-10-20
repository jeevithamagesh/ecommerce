import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class itemsmodel {
  @JsonProperty('username', String, true)
  public username: string = undefined;

  @JsonProperty('image', String, true)
  public image: string = undefined;

  @JsonProperty('name', String, true)
  public name: string = undefined;

  @JsonProperty('price', Number, true)
  public price: number = undefined;

  @JsonProperty('productId', String, true)
  public productId: string = undefined;

  @JsonProperty('quantity', Number, true)
  public quantity: number = undefined;

  @JsonProperty('added', Boolean, true)
  public added: boolean = undefined;

}