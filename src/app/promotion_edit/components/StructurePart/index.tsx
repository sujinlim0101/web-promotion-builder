import { useQuery } from "@tanstack/react-query";
import request from "graphql-request";

import { getPromoPage, listPromoPages } from "@/graphql/queries";
import { usePageState } from "@/hooks/usePageState";

import { useComponentSelect } from "../../hooks/useComponentSelect";

import { LayoutDropdown } from "./LayoutDropdown";

export const StructurePart = () => {
  const [pageState] = usePageState();
  const { updatePageSelected } = useComponentSelect();

  const { data } = useQuery({
    queryKey: ["films"],
    queryFn: async () =>
      request(
        "https://n2fx7lxdpjaevg3my3d2s6rtoi.appsync-api.ap-northeast-2.amazonaws.com/graphql",
        getPromoPage,
        // variables are type-checked too!
        { first: 10 },
        {
          "x-api-key": "da2-ecycossii5hm5bo34j7udmopam",
        }
      ),
  });

  return (
    <div className="w-[200px] border-1 border-gray300 border-solid">
      <div
        onClick={updatePageSelected}
        className={`p-16 ${pageState.selected ? "bg-blue50" : ""}`}
      >
        page
      </div>
      {pageState.children.map((child) => {
        return (
          // use dropdown component
          <div key={child.id}>
            <LayoutDropdown child={child} />
          </div>
        );
      })}
    </div>
  );
};
