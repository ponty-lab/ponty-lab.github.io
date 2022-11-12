import AvaColors from "../styles/colors.style";

type Props = {
  regionName: string | null;
  dangerAM: number;
  dangerPM: number;
  name: string;
};

const DangerName: Record<number, string> = {
  0: "No Snow",
  1: "Low",
  2: "Moderate",
  3: "Considerable",
  4: "High",
  5: "Very High",
};

const Sidebar = (props: Props) => {
  const dangerLevel = props.name === "AM" ? props.dangerAM : props.dangerPM;

  return props.regionName ? (
    <div
      className="sidebar"
      style={{
        backgroundColor: AvaColors[dangerLevel],
        opacity: 0.65,
        borderBottomColor: AvaColors[dangerLevel],
        borderLeftColor: AvaColors[dangerLevel],
        borderLeftStyle: "solid",
        borderLeftWidth: 5,
        borderBottomStyle: "solid",
        borderBottomWidth: 3,
      }}
    >
      {props.regionName} | {DangerName[dangerLevel]}
    </div>
  ) : null;
};

export default Sidebar;
