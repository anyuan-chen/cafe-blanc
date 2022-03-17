import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Contact from "../../index/desktop/contact";
import Question from "../question";
const MobilePage = () => {
  return (
    <Box
      sx={{
        background: "#FFFAF4",
        paddingTop: "5vw",
      }}
    >
      <Box sx={{ marginX: "15vw", marginBottom: "2rem", color: "#532A10" }}>
        <Typography variant="h3">Frequently Asked Questions</Typography>
      </Box>
      <Box sx={{ marginX: "15vw", marginBottom: "15rem", color: "#532A10" }}>
        <Question description="Yes! All drinks can be made iced free of charge. Simply let a barista know or make a note on the ordering website.">
          Do you offer ice?
        </Question>
        <Question
          description="We have coordinated our safety plan based on suggestions by the Provincial Health Officer and WorkSafeBC. Social distancing measures have been put in place to ensure patron safety during takeout and dine-in.
"
        >
          What pandemic precautions are the cafe following?{" "}
        </Question>
        <Question description="We have a lot of options on our menu, which you can view in PDF form here, or on an ordering website like UberEats or DoorDash. Happy browsing!">
          What should I order?{" "}
        </Question>
        <Question description="You can grab takeout or dine-in at this cafe location, order on UberEats, or DoorDash.">
          How can I order?{" "}
        </Question>
        <Question description="Please let our baristas know or make a note in the ordering app if you have any special dietary needs. Gluten free options will be labelled as such but please feel free to ask if you are worried about traces of any allergens.">
          What if I have an allergy?{" "}
        </Question>
        <Question
          description="Feel free to contact us by phone (778-717-6281), Instagram, or email. We are happy to address any concerns you may have :)"
        >
          How can I ask a question not listed here?{" "}
        </Question>
      </Box>
      <Contact></Contact>
    </Box>
  );
};
export default MobilePage;
