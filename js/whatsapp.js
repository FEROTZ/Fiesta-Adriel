function whats(phone_number, course = "!Hola, quiero confirmar mi asistencía al cumpleaños de Adriel!") {
  console.log("Función whats")
  const PHONE = phone_number
  //Es necesario dejar el espacio para complementar el mensaje con el curso/certificación
  const MESSAGE = encodeURI("")
  encodeURI(course)
  let link = `https://wa.me/${PHONE}?text=${MESSAGE}${course}`
  var win = window.open(link, '_blank');
}