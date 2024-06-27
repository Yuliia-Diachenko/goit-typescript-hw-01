type AllType = {
        name: string;
        position: number;
        color: string;
        weight: number
    }
  
    type PickedAllType = Pick<AllType, "name" | "position" | "color" | "weight">;

  
    function compare<T extends PickedAllType, U extends PickedAllType>(top: T,
        bottom: U): PickedAllType {
        return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    }
    }