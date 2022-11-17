import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import BottomNavigation from "../../components/common/BottomNavigation";
import ValidatedForm from "../../components/common/ValidatedForm";
import {
  setNotificationMessage,
  setNotificationType,
  setNotificationStatus,
} from "../../redux/slices/notificationSlice";
import FormValidator from "../../services/FormValidator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface FormFields {
  name: string;
  username: string;
  password: string;
  passwordRepeat: string;
  surname: string;
  email: string;
  telephone: string;
}

const Register = () => {
  const [form, setForm] = React.useState<FormFields>({
    name: "",
    username: "",
    password: "",
    passwordRepeat: "",
    surname: "",
    email: "",
    telephone: "",
  });

  const [errors, setErrors] = React.useState<FormFields>({
    name: "",
    username: "",
    password: "",
    passwordRepeat: "",
    surname: "",
    email: "",
    telephone: "",
  });
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const validateForm = () => {
    let success = true;

    let newErrorsState = { ...errors };
    if (!FormValidator.checkIfIsRequired(form.name)) {
      newErrorsState.name = FormValidator.requiredMessage;
      success = false;
    } else if (!FormValidator.checkMinLength(form.name, 3)) {
      newErrorsState.name = FormValidator.minLengthMessage;
      success = false;
    }
    if (!FormValidator.checkIfIsRequired(form.username)) {
      newErrorsState.username = FormValidator.requiredMessage;
      success = false;
    } else if (!FormValidator.checkMinLength(form.username, 3)) {
      newErrorsState.username = FormValidator.minLengthMessage;
      success = false;
    }

    if (!FormValidator.checkIfIsRequired(form.password)) {
      newErrorsState.password = FormValidator.requiredMessage;
      success = false;
    } else if (!FormValidator.checkMinLength(form.password, 8)) {
      newErrorsState.password = FormValidator.minLengthMessage;
      success = false;
    } else if (!FormValidator.checkContainsSmallLetter(form.password)) {
      newErrorsState.password = FormValidator.smallLetterMessage;
      success = false;
    } else if (!FormValidator.checkContainsUpperLetter(form.password)) {
      newErrorsState.password = FormValidator.upperLetterMessage;
      success = false;
    } else if (!FormValidator.checkContainsDigit(form.password)) {
      newErrorsState.password = FormValidator.digitMessage;
      success = false;
    }
    if (!FormValidator.checkIfIsRequired(form.passwordRepeat)) {
      newErrorsState.passwordRepeat = FormValidator.requiredMessage;
      success = false;
    } else if (!FormValidator.checkMinLength(form.passwordRepeat, 3)) {
      newErrorsState.passwordRepeat = FormValidator.minLengthMessage;
      success = false;
    }
    if (!FormValidator.checkIfIsRequired(form.surname)) {
      newErrorsState.surname = FormValidator.requiredMessage;
      success = false;
    } else if (!FormValidator.checkMinLength(form.surname, 3)) {
      newErrorsState.surname = FormValidator.minLengthMessage;
      success = false;
    }
    if (!FormValidator.checkIfIsRequired(form.email)) {
      newErrorsState.email = FormValidator.requiredMessage;
      success = false;
    } else if (!FormValidator.checkMinLength(form.email, 3)) {
      newErrorsState.email = FormValidator.minLengthMessage;
      success = false;
    }
    if (!FormValidator.checkIfIsRequired(form.telephone)) {
      newErrorsState.telephone = FormValidator.requiredMessage;
      success = false;
    } else if (!FormValidator.checkMinLength(form.telephone, 3)) {
      newErrorsState.telephone = FormValidator.minLengthMessage;
      success = false;
    }

    setErrors(newErrorsState);

    return success;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    dispatch(setNotificationMessage("Zarejestrowano pomyślnie"));
    dispatch(setNotificationType("success"));
    dispatch(setNotificationStatus(true));
  };

  return (
    <React.Fragment>
      <Grid item xs={12} marginTop={8}>
        <Typography variant="h4" textAlign="center">
          Rejestracja
        </Typography>
      </Grid>
      <Grid item xs={3} container marginTop={10} marginRight={70}>
        <ValidatedForm
          fieldName="Imię"
          placeholder="Wpisz imię..."
          value={form.name}
          error={errors.name}
          onChange={(value) => setForm({ ...form, name: value })}
          onErrorChange={(error) => setErrors({ ...errors, name: error })}
        />
        <ValidatedForm
          fieldName="Nazwa użytkownika"
          placeholder="Wpisz nazwę użytkownika..."
          value={form.username}
          error={errors.username}
          onChange={(value) => setForm({ ...form, username: value })}
          onErrorChange={(error) => setErrors({ ...errors, username: error })}
        />
        <ValidatedForm
          fieldName="Hasło"
          placeholder="Wpisz hasło..."
          type="password"
          value={form.password}
          error={errors.password}
          onChange={(value) => setForm({ ...form, password: value })}
          onErrorChange={(error) => setErrors({ ...errors, password: error })}
        />
        <ValidatedForm
          fieldName="Powtórz hasło"
          placeholder="Powtórz hasło..."
          type="password"
          value={form.passwordRepeat}
          error={errors.password}
          onChange={(value) => setForm({ ...form, passwordRepeat: value })}
          onErrorChange={(error) =>
            setErrors({ ...errors, passwordRepeat: error })
          }
        />
      </Grid>
      <Grid item xs={3} container marginLeft={70}>
        <ValidatedForm
          fieldName="Nazwisko"
          placeholder="Wpisz nazwisko..."
          value={form.surname}
          error={errors.surname}
          onChange={(value) => setForm({ ...form, surname: value })}
          onErrorChange={(error) => setErrors({ ...errors, surname: error })}
        />
        <ValidatedForm
          fieldName="E-mail"
          placeholder="Wpisz e-mail..."
          value={form.email}
          error={errors.username}
          onChange={(value) => setForm({ ...form, email: value })}
          onErrorChange={(error) => setErrors({ ...errors, email: error })}
        />
        <ValidatedForm
          fieldName="Numer telefonu"
          placeholder="Wpisz nr telefonu..."
          value={form.telephone}
          error={errors.telephone}
          onChange={(value) => setForm({ ...form, telephone: value })}
          onErrorChange={(error) => setErrors({ ...errors, telephone: error })}
        />
        <Grid
          item
          xs={6}
          container
          marginTop={10}
          marginLeft={0}
          justifyContent="center"
        >
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
          >
            Zarejestruj się
          </Button>
        </Grid>
        <Grid item container justifyContent="center" marginTop={3}>
          <Button
            fullWidth
            variant="text"
            color="secondary"
            sx={{ color: "#1C3CAD" }}
            onClick={() => navigate("/login")}
          >
            Masz już konto? Zaloguj się
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <BottomNavigation text={"Wróć do strony głównej"} path="../" />
      </Grid>
    </React.Fragment>
  );
};

export default Register;
