export interface Room {
  id: string;
  name: string;
  imageUrl: string;
  floor: string;
  wall: string;
}

const roomsData: Room[] = [
  {
    id: "room1",
    name: "Cozy Living Room",
    imageUrl:
      "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    floor: "Light Oak hardwood",
    wall: "Warm Cream",
  },
  {
    id: "room2",
    name: "Modern Bedroom",
    imageUrl:
      "https://images.unsplash.com/photo-1583845112203-29329902332e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    floor: "Dark Walnut Laminate",
    wall: "Deep Blue Accent",
  },
  {
    id: "room3",
    name: "Spacious Kitchen",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    floor: "Ceramic Tile",
    wall: "White Subway Tile",
  },
  {
    id: "room4",
    name: "Home Office",
    imageUrl:
      "https://images.unsplash.com/photo-1544140708-514b7837e6b5?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    floor: "Grey Vinyl Plank",
    wall: "Soft Grey",
  },
];

export default roomsData;